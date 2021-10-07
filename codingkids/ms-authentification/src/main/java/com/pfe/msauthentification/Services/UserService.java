package com.pfe.msauthentification.Services;

import com.pfe.msauthentification.Model.User;
import com.pfe.msauthentification.entities.PasswordResetToken;
import com.pfe.msauthentification.repository.PasswordTokenRepository;
import com.pfe.msauthentification.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import sun.security.util.Password;

import java.nio.file.attribute.UserPrincipalNotFoundException;

@Service

public class UserService {
@Autowired
    private UserRepository userRepo;
@Autowired
private PasswordTokenRepository passwordTokenRepository;
@Autowired
SequenceGeneratorService sequenceGeneratorService;
    @Autowired
    PasswordEncoder encoder;
    public void createPasswordResetTokenForUser(User user, String token) {
        PasswordResetToken myToken = new PasswordResetToken(sequenceGeneratorService.generateSequence(PasswordResetToken.SEQUENCE_NAME),token, user);
        passwordTokenRepository.save(myToken);
    }






    public void updateResetPasswordToken(String token, String email) throws UserPrincipalNotFoundException {
        User customer = userRepo.findByEmail(email);
        if (customer != null) {
            customer.setResetPasswordToken(token);
            userRepo.save(customer);
        } else {
            throw new UserPrincipalNotFoundException("Could not find any customer with the email " + email);
        }
    }

    public User getUserByResetPasswordToken(String token) {
        return userRepo.findByResetPasswordToken(token);
    }

    public void updatePassword(User customer, String newPassword) {
      //  BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
      //  String encodedPassword = passwordEncoder.encode(newPassword);
        ;
        customer.setPassword(encoder.encode(newPassword));
System.out.println(encoder.encode(newPassword));
        customer.setResetPasswordToken(null);
        userRepo.save(customer);
    }

    }











