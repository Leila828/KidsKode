package com.pfe.msauthentification.controllers;

import com.pfe.msauthentification.Model.ERole;
import com.pfe.msauthentification.Model.Role;
import com.pfe.msauthentification.Model.User;
import com.pfe.msauthentification.Security.jwt.JwtUtils;
import com.pfe.msauthentification.Services.SequenceGeneratorService;
import com.pfe.msauthentification.Services.UserDetailsImpl;
import com.pfe.msauthentification.entities.Enfant;
import com.pfe.msauthentification.entities.Parent;
import com.pfe.msauthentification.payload.request.LoginRequest;
import com.pfe.msauthentification.payload.request.SignupRequest;
import com.pfe.msauthentification.payload.response.JwtResponse;
import com.pfe.msauthentification.payload.response.MessageResponse;
import com.pfe.msauthentification.repository.EnfantRepository;
import com.pfe.msauthentification.repository.ParentRepository;
import com.pfe.msauthentification.repository.RoleRepository;
import com.pfe.msauthentification.repository.UserRepository;
import com.pfe.msauthentification.payload.request.*;
import com.pfe.msauthentification.payload.response.*;

import net.bytebuddy.utility.RandomString;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.validation.Valid;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/auth")
public class AuthController {
    @Autowired
    AuthenticationManager authenticationManager;
    @Autowired
    ParentRepository parentRepository;
    @Autowired
    EnfantRepository enfantRepository;
    @Autowired
    UserRepository userRepository;

    @Autowired
    RoleRepository roleRepository;

    @Autowired
    PasswordEncoder encoder;

    @Autowired
    JwtUtils jwtUtils;
@Autowired
SequenceGeneratorService sequenceGeneratorService;
    @PostMapping("/signin")
    public ResponseEntity<?> authenticateUser(@Valid @RequestBody LoginRequest loginRequest) {

        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(loginRequest.getUsername(), loginRequest.getPassword()));

        SecurityContextHolder.getContext().setAuthentication(authentication);
        String jwt = jwtUtils.generateJwtToken(authentication);

        UserDetailsImpl userDetails = (UserDetailsImpl) authentication.getPrincipal();
        List<String> roles = userDetails.getAuthorities().stream()
                .map(item -> item.getAuthority())
                .collect(Collectors.toList());

        return ResponseEntity.ok(new JwtResponse(jwt,
                userDetails.getId(),
                userDetails.getUsername(),
                userDetails.getEmail(),
                roles));
    }

































    @PostMapping("/signup/child")
    public ResponseEntity<?> registerchild(@Valid @RequestBody SignupRequestChild signUpRequest)
    {
        if (userRepository.existsByUsername(signUpRequest.getUsername())) {
            return ResponseEntity
                    .badRequest()
                    .body(new MessageResponse("Error: Username is already taken!"));
        }

        if (userRepository.existsByEmail(signUpRequest.getEmail())) {
            return ResponseEntity
                    .badRequest()
                    .body(new MessageResponse("Error: Email is already in use!"));
        }

        // Create new user's account
        User user = new User(sequenceGeneratorService.generateSequence(User.SEQUENCE_NAME),signUpRequest.getUsername(),
                signUpRequest.getEmail(),
                encoder.encode(signUpRequest.getPassword()));

        Set<String> strRoles = signUpRequest.getRoles();
        Set<Role> roles = new HashSet<>();

        if (strRoles == null) {
            Role userRole = roleRepository.findByName(ERole.ROLE_CHILD)
                    .orElseThrow(() -> new RuntimeException("Error: Role is not found."));
            roles.add(userRole);

            }


        user.setRoles(roles);
        userRepository.save(user);
        Enfant enfant=new Enfant(sequenceGeneratorService.generateSequence(Enfant.SEQUENCE_NAME),user,signUpRequest.getAge(),signUpRequest.getExperience(),null);

        enfantRepository.save(enfant);

        return ResponseEntity.ok(new MessageResponse("User registered successfully!"));
    }

    @PostMapping("/signup/parent")
    public ResponseEntity<?> registerparent(@Valid @RequestBody SignupRequestParent signUpRequest)
    {
        if (userRepository.existsByUsername(signUpRequest.getUsername())) {
            return ResponseEntity
                    .badRequest()
                    .body(new MessageResponse("Error: Username is already taken!"));
        }

        if (userRepository.existsByEmail(signUpRequest.getEmail())) {
            return ResponseEntity
                    .badRequest()
                    .body(new MessageResponse("Error: Email is already in use!"));
        }

        // Create new user's account
        User userparent = new User(sequenceGeneratorService.generateSequence(User.SEQUENCE_NAME),signUpRequest.getUsername(),
                signUpRequest.getEmail(),
                encoder.encode(signUpRequest.getPassword()));
        User userchild= new User(sequenceGeneratorService.generateSequence(User.SEQUENCE_NAME),signUpRequest.getNomenfant(),
                signUpRequest.getEmail(),
                null);
        Set<String> strRoles = signUpRequest.getRoles();
        Set<String> strRoles_child = signUpRequest.getRoles();

        Set<Role> roles = new HashSet<>();
        Set<Role> roles_child = new HashSet<>();

        if (strRoles == null) {
            Role userRole = roleRepository.findByName(ERole.ROLE_PARENT)
                    .orElseThrow(() -> new RuntimeException("Error: Role is not found."));
            roles.add(userRole);
            }
        if (strRoles_child == null) {
            Role userRole = roleRepository.findByName(ERole.ROLE_CHILD)
                    .orElseThrow(() -> new RuntimeException("Error: Role is not found."));
            roles_child.add(userRole);
        }

        userparent.setRoles(roles);

        userRepository.save(userparent);
        userchild.setRoles(roles_child);

        userRepository.save(userchild);
        Enfant enfant=new Enfant(sequenceGeneratorService.generateSequence(Enfant.SEQUENCE_NAME),userchild,signUpRequest.getAge(),signUpRequest.getExperience(),null);
        enfantRepository.save(enfant);
        Parent parent=new Parent(sequenceGeneratorService.generateSequence(Parent.SEQUENCE_NAME),userparent,enfant);
        parentRepository.save(parent);
        return ResponseEntity.ok(new MessageResponse("User registered successfully!"));
    }







    @PostMapping("/signup")
    public ResponseEntity<?> registerUser(@Valid @RequestBody SignupRequest signUpRequest) {
        if (userRepository.existsByUsername(signUpRequest.getUsername())) {
            return ResponseEntity
                    .badRequest()
                    .body(new MessageResponse("Error: Username is already taken!"));
        }

        if (userRepository.existsByEmail(signUpRequest.getEmail())) {
            return ResponseEntity
                    .badRequest()
                    .body(new MessageResponse("Error: Email is already in use!"));
        }

        // Create new user's account
        User user = new User(1,signUpRequest.getUsername(),
                signUpRequest.getEmail(),
                encoder.encode(signUpRequest.getPassword()));

        Set<String> strRoles = signUpRequest.getRoles();
        Set<Role> roles = new HashSet<>();

        if (strRoles == null) {
            Role userRole = roleRepository.findByName(ERole.ROLE_USER)
                    .orElseThrow(() -> new RuntimeException("Error: Role is not found."));
            roles.add(userRole);
        } else {
            strRoles.forEach(role -> {
                switch (role) {
                    case "admin":
                        Role adminRole = roleRepository.findByName(ERole.ROLE_ADMIN)
                                .orElseThrow(() -> new RuntimeException("Error: Role is not found."));
                        roles.add(adminRole);

                        break;
                    case "mod":
                        Role modRole = roleRepository.findByName(ERole.ROLE_MODERATOR)
                                .orElseThrow(() -> new RuntimeException("Error: Role is not found."));
                        roles.add(modRole);

                        break;
                    default:
                        Role userRole = roleRepository.findByName(ERole.ROLE_USER)
                                .orElseThrow(() -> new RuntimeException("Error: Role is not found."));
                        roles.add(userRole);
                }
            });
        }

        user.setRoles(roles);
        userRepository.save(user);

        return ResponseEntity.ok(new MessageResponse("User registered successfully!"));
    }





















































@GetMapping("/testDocker")
public String getData(){
        return "in docker project";
}









}
