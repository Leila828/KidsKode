package com.pfe.msauthentification.controllers;

import com.pfe.msauthentification.Model.User;
import com.pfe.msauthentification.Services.UserSecurityService;
import com.pfe.msauthentification.Services.UserService;
import com.pfe.msauthentification.entities.GenericResponse;
import com.pfe.msauthentification.entities.PasswordResetToken;
import com.pfe.msauthentification.entities.Utility;
import com.pfe.msauthentification.payload.request.ResetPassword;
import com.pfe.msauthentification.repository.ISecurityUserService;
import com.pfe.msauthentification.repository.PasswordTokenRepository;
import com.pfe.msauthentification.repository.UserRepository;
import com.pfe.msauthentification.repository.passwordDto;
import net.bytebuddy.utility.RandomString;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.MessageSource;
import org.springframework.core.env.Environment;
import org.springframework.data.repository.query.Param;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.JavaMailSenderImpl;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;
import javax.servlet.http.HttpServletRequest;
import javax.validation.Valid;
import java.io.UnsupportedEncodingException;
import java.nio.file.attribute.UserPrincipalNotFoundException;
import java.util.Calendar;
import java.util.Locale;
import java.util.Optional;
import java.util.UUID;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/auth")
public class ForgotPasswordController {
    @Autowired
    ISecurityUserService securityUserService;
    @Autowired
    private JavaMailSender mailSender;

    @Autowired
    private MessageSource messageSource;
    @Autowired
    private UserService customerService;
@Autowired
private UserRepository userRepo;
    @Autowired
    private Environment env;
@Autowired
    UserSecurityService userSecurityService;
@Autowired
private PasswordTokenRepository passwordTokenRepository;

    /*   @GetMapping("/forgot_password")
       public String showForgotPasswordForm() {

       }*/
    public static String token;
 private String getAppUrl(HttpServletRequest request) {
     return "http://" + request.getServerName() + ":" + "4200" + request.getContextPath();
 }

    //@PostMapping("/forgetpassword")

    public GenericResponse resetPassword(HttpServletRequest request,
                                         @RequestBody ResetPassword resetPassword) throws UserPrincipalNotFoundException {
String Email=resetPassword.getEmail();
System.out.println(Email);
     User user = userRepo.findByEmail(Email);
        if (user == null) {
            throw new UserPrincipalNotFoundException("Could not find any customer with the email " );
        }
       token = UUID.randomUUID().toString();
       customerService.createPasswordResetTokenForUser(user,token);
       mailSender.send(constructResetTokenEmail(getAppUrl(request),
                request.getLocale(), token, user));
        return new GenericResponse(
                messageSource.getMessage("message.resetPasswordEmail", null,
                        request.getLocale()));

    }
    @GetMapping("/resetpass")
    public String gettoken(String token){
     return token;
    }

    private SimpleMailMessage constructResetTokenEmail(final String contextPath, final Locale locale, final String token, final User user) {
        final String url = contextPath + "/user/changePassword?token=" + token;
        final String message = messageSource.getMessage("message.resetPassword", null, locale);
        return constructEmail("Reset Password", message + " \r\n" + url, user);
    }
    private SimpleMailMessage constructEmail(String subject, String body, User user) {
        final SimpleMailMessage email = new SimpleMailMessage();
        email.setSubject(subject);
        email.setText(body);
        email.setTo(user.getEmail());
        email.setFrom(env.getProperty("support.email"));
        return email;
    }
//------------------------------------------------------------
@PostMapping("/forgetpassword")

public String processForgotPassword(HttpServletRequest request,
                                    @RequestBody ResetPassword resetPassword) throws UserPrincipalNotFoundException {
    String email = resetPassword.getEmail();
    token = RandomString.make(30);

    try {
        customerService.updateResetPasswordToken(token, email);
      String ss=  "http://" + request.getServerName() + ":" + "4200" + request.getContextPath();
        String resetPasswordLink = Utility.getSiteURL(request) + "/api/auth/user/changePassword?token=" + token;
        String reset=ss+"/resetpass?token="+token ;
        sendEmail(email, reset);

    } catch (UserPrincipalNotFoundException ex) {
       // model.addAttribute("error", ex.getMessage());
        ex.printStackTrace();
        System.out.println("saha sahaa");
    } catch (UnsupportedEncodingException | MessagingException e) {
      //  model.addAttribute("error", "Error while sending email");
        System.out.println("hold on");

        e.getStackTrace();
    }
    return "function password done";
}

    public void sendEmail(String recipientEmail, String link)
            throws  UnsupportedEncodingException, MessagingException {
        MimeMessage message = mailSender.createMimeMessage();
        MimeMessageHelper helper = new MimeMessageHelper(message);

        helper.setFrom("contact@shopme.com", "Shopme Support");
        helper.setTo(recipientEmail);

        String subject = "Here's the link to reset your password";

        String content = "<p>Hello,</p>"
                + "<p>You have requested to reset your password.</p>"
                + "<p>Click the link below to change your password:</p>"
                + "<p><a href=\"" + link + "\">Change my password</a></p>"
                + "<br>"
                + "<p>Ignore this email if you do remember your password, "
                + "or you have not made the request.</p>";

        helper.setSubject(subject);

        helper.setText(content, true);

        mailSender.send(message);
    }




/*
    @RequestMapping(value="/reset_password", method = RequestMethod.GET)
    public @ResponseBody  String showResetPassword(@RequestParam("token") String token, Model model) {
      User customer = customerService.getUserByResetPasswordToken(token);
System.out.println(token);
        if (customer == null) {
            return "mknch menha";
        }

        return "rkaaayn ";
    }


*/

    @PostMapping("/reset_password")
    public String processResetPassword(String Token,@RequestBody ResetPassword resetPassword) {
        String Tooken = token;
        String password = resetPassword.getResetPasswordToken();
        System.out.println(Tooken);
        System.out.println(password);

       User customer = customerService.getUserByResetPasswordToken(token);

        if (customer == null) {
            return "invallid";
        } else {
            customerService.updatePassword(customer, password);
return "succesfull";
        }

    }


    /*private SimpleMailMessage constructResetTokenEmail(
            String contextPath, Locale locale, String token, User user) {
        String url = contextPath + "/user/changePassword?token=" + token;
        String message = messages.getMessage("message.resetPassword",
                null, locale);
        return constructEmail("Reset Password", message + " \r\n" + url, user);
    }

    private SimpleMailMessage constructEmail(String subject, String body,
                                             User user) {
        SimpleMailMessage email = new SimpleMailMessage();
        email.setSubject(subject);
        email.setText(body);
        email.setTo(user.getEmail());
        email.setFrom(env.getProperty("support.email"));
        return email;
    }
    public void sendEmail(){

    }

/*
    @GetMapping("/reset_password")
    public String showResetPasswordForm() {

    }

    @PostMapping("/reset_password")
    public String processResetPassword() {

    }*/
}
