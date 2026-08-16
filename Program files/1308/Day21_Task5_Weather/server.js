// Import required modules
const express = require('express');
const axios = require('axios');
require('dotenv').config();
// Initialize the express app
const app = express();
const PORT = 3000;
// Async function for getting weather
async function getWeather(city) {
  try {
    console.log(`🔍 Looking up weather for ${city}...`);
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.WEATHER_KEY}&units=metric`
    );
    const data = response.data;
    console.log('✅ Got weather data!');
    return {
      success: true,
      city: data.name,
      country: data.sys.country,
      temperature: Math.round(data.main.temp),
      feels_like: Math.round(data.main.feels_like),
      temp_min: Math.round(data.main.temp_min),
      temp_max: Math.round(data.main.temp_max),
      weather: data.weather[0].main,
      description: data.weather[0].description,
      humidity: data.main.humidity,
      wind_speed: data.wind.speed,
      icon: data.weather[0].icon
    };
  } catch (error) {
    console.error('❌ Error:', error.message);
    if (error.response && error.response.status === 404) {
      return {
        success: false,
        message: 'City not found! Please check the spelling.'
      };
    }
    return {
      success: false,
      message: 'Could not get weather data. Please try again!'
    };
  }
}
// API route for getting weather data
app.get('/api/weather', async (req, res) => {
  const city = req.query.city;
  if (!city) {
    return res.json({
      success: false,
      message: 'Please enter a city name!'
    });
  }
  const weatherData = await getWeather(city);
  res.json(weatherData);
});
// Main page with search bar
app.get('/', (req, res) => {
  res.send(`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>🌤️ Weather App</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 20px;
        }
        .container {
            background: white;
            padding: 40px;
            border-radius: 20px;
            box-shadow: 0 20px 60px rgba(0,0,0,0.3);
            max-width: 500px;
            width: 100%;
        }
        h1 {
            text-align: center;
            color: #667eea;
            margin-bottom: 30px;
            font-size: 2.5em;
        }
        .search-box {
            display: flex;
            gap: 10px;
            margin-bottom: 30px;
        }
        input {
            flex: 1;
            padding: 15px;
            border: 2px solid #e0e0e0;
            border-radius: 10px;
            font-size: 16px;
            transition: border 0.3s;
        }
        input:focus {
            outline: none;
            border-color: #667eea;
        }
        button {
            padding: 15px 30px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            border: none;
            border-radius: 10px;
            font-size: 16px;
            cursor: pointer;
            transition: transform 0.2s;
        }
        button:hover {
            transform: translateY(-2px);
        }
        button:active {
            transform: translateY(0);
        }
        .weather-result {
            display: none;
            text-align: center;
            animation: fadeIn 0.5s;
        }
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }
        .weather-icon {
            font-size: 100px;
            margin: 20px 0;
        }
        .city-name {
            font-size: 2em;
            color: #333;
            margin-bottom: 10px;
        }
        .temperature {
            font-size: 4em;
            color: #667eea;
            font-weight: bold;
            margin: 20px 0;
        }
        .description {
            font-size: 1.5em;
            color: #666;
            text-transform: capitalize;
            margin-bottom: 20px;
        }
        .details {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 15px;
            margin-top: 30px;
        }
        .detail-item {
            background: #f5f5f5;
            padding: 15px;
            border-radius: 10px;
        }
        .detail-label {
            color: #888;
            font-size: 0.9em;
            margin-bottom: 5px;
        }
        .detail-value {
            color: #333;
            font-size: 1.2em;
            font-weight: bold;
        }
        .error {
            background: #ffebee;
            color: #c62828;
            padding: 15px;
            border-radius: 10px;
            text-align: center;
            display: none;
        }
        .loading {
            text-align: center;
            color: #667eea;
            display: none;
            font-size: 1.2em;
        }
        .examples {
            margin-top: 20px;
            text-align: center;
            color: #888;
            font-size: 0.9em;
        }
        .examples span {
            color: #667eea;
            cursor: pointer;
            margin: 0 5px;
        }
        .examples span:hover {
            text-decoration: underline;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>🌤️ Weather App</h1>
        <div class="search-box">
            <input 
                type="text" 
                id="cityInput" 
                placeholder="Enter city name (e.g., Tokyo, London, Paris)" 
                onkeypress="if(event.key==='Enter') searchWeather()"
            />
            <button onclick="searchWeather()">🔍 Search</button>
        </div>
        <div class="loading" id="loading">
            ⏳ Loading weather data...
        </div>
        <div class="error" id="error"></div>
        <div class="weather-result" id="weatherResult">
            <div class="weather-icon" id="weatherIcon"></div>
            <div class="city-name" id="cityName"></div>
            <div class="temperature" id="temperature"></div>
            <div class="description" id="description"></div>
            <div class="details">
                <div class="detail-item">
                    <div class="detail-label">Feels Like</div>
                    <div class="detail-value" id="feelsLike"></div>
                </div>
                <div class="detail-item">
                    <div class="detail-label">Humidity</div>
                    <div class="detail-value" id="humidity"></div>
                </div>
                <div class="detail-item">
                    <div class="detail-label">Wind Speed</div>
                    <div class="detail-value" id="windSpeed"></div>
                </div>
                <div class="detail-item">
                    <div class="detail-label">Min/Max</div>
                    <div class="detail-value" id="minMax"></div>
                </div>
            </div>
        </div>
        <div class="examples">
            Try: 
            <span onclick="searchCity('Tokyo')">Tokyo</span>
            <span onclick="searchCity('London')">London</span>
            <span onclick="searchCity('Paris')">Paris</span>
            <span onclick="searchCity('Mumbai')">Mumbai</span>
            <span onclick="searchCity('New York')">New York</span>
        </div>
    </div>
    <script>
        // Weather icon mapping
        const iconMap = {
            '01d': '☀️', '01n': '🌙',
            '02d': '⛅', '02n': '☁️',
            '03d': '☁️', '03n': '☁️',
            '04d': '☁️', '04n': '☁️',
            '09d': '🌧️', '09n': '🌧️',
            '10d': '🌦️', '10n': '🌧️',
            '11d': '⛈️', '11n': '⛈️',
            '13d': '❄️', '13n': '❄️',
            '50d': '🌫️', '50n': '🌫️'
        };
        async function searchWeather() {
            const city = document.getElementById('cityInput').value.trim();
            if (!city) {
                showError('Please enter a city name!');
                return;
            }
            // Show loading
            document.getElementById('loading').style.display = 'block';
            document.getElementById('error').style.display = 'none';
            document.getElementById('weatherResult').style.display = 'none';
            try {
                const response = await fetch(\`/api/weather?city=\${encodeURIComponent(city)}\`);
                const data = await response.json();
                document.getElementById('loading').style.display = 'none';
                if (data.success) {
                    displayWeather(data);
                } else {
                    showError(data.message);
                }
            } catch (error) {
                document.getElementById('loading').style.display = 'none';
                showError('Something went wrong! Please try again.');
            }
        }
        function displayWeather(data) {
            document.getElementById('weatherIcon').textContent = iconMap[data.icon] || '🌤️';
            document.getElementById('cityName').textContent = \`\${data.city}, \${data.country}\`;
            document.getElementById('temperature').textContent = \`\${data.temperature}°C\`;
            document.getElementById('description').textContent = data.description;
            document.getElementById('feelsLike').textContent = \`\${data.feels_like}°C\`;
            document.getElementById('humidity').textContent = \`\${data.humidity}%\`;
            document.getElementById('windSpeed').textContent = \`\${data.wind_speed} m/s\`;
            document.getElementById('minMax').textContent = \`\${data.temp_min}°/\${data.temp_max}°\`;
            document.getElementById('weatherResult').style.display = 'block';
        }
        function showError(message) {
            const errorDiv = document.getElementById('error');
            errorDiv.textContent = message;
            errorDiv.style.display = 'block';
        }
        function searchCity(city) {
            document.getElementById('cityInput').value = city;
            searchWeather();
        }
        // Search on page load with default city
        window.onload = () => {
            searchCity('Bengaluru');
        };
    </script>
</body>
</html>
  `);
});
// Start the server
app.listen(PORT, () => {
  console.log(`
    🎉 Weather App is running!
    🌐 Open your browser: http://localhost:${PORT}
    ✨ Features:
    - Beautiful search interface
    - Real-time weather data
    - Responsive design
  `);
});