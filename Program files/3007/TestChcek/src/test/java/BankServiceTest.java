
// we are enabling Mockito annotations in the test class.

import org.example.BankAccount;
import org.example.BankRepository;
import org.example.BankService;
import org.junit.jupiter.api.Test;

import static org.mockito.Mockito.*;
import static org.junit.jupiter.api.Assertions.*;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.junit.jupiter.MockitoExtension;

@ExtendWith(MockitoExtension.class)
class BankServiceTest {
    @Test
    void testDeposit() {
        // Arrange
        BankRepository mockRepo = mock(BankRepository.class);
        BankAccount account = new BankAccount("123", 500.0);
        when(mockRepo.findByAccountNumber("123")).thenReturn(account);
        BankService service = new BankService(mockRepo);
        // Act
        service.deposit("123", 200.0);
        // Assert
        assertEquals(700.0, account.getBalance());
        verify(mockRepo).save(account); // verify save was called
    }


    @Test
    void testWithdrawSuccess() {
        BankRepository mockRepo = mock(BankRepository.class);
        BankAccount account = new BankAccount("123", 500.0);


        when(mockRepo.findByAccountNumber("123")).thenReturn(account);


        BankService service = new BankService(mockRepo);
        service.withdraw("123", 200.0);


        assertEquals(300.0, account.getBalance());
        verify(mockRepo).save(account);
    }


    @Test
    void testWithdrawInsufficientFunds() {
        BankRepository mockRepo = mock(BankRepository.class);
        BankAccount account = new BankAccount("123", 100.0);


        when(mockRepo.findByAccountNumber("123")).thenReturn(account);


        BankService service = new BankService(mockRepo);


        Exception ex = assertThrows(IllegalArgumentException.class,
                () -> service.withdraw("123", 200.0));


        assertEquals("Insufficient funds", ex.getMessage());
        verify(mockRepo, never()).save(account); // save should NOT be called
    }
}
