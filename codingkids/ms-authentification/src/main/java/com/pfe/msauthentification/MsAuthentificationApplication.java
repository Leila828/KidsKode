package com.pfe.msauthentification;

import com.pfe.msauthentification.Model.ERole;
import com.pfe.msauthentification.Model.Role;
import com.pfe.msauthentification.Model.User;
import com.pfe.msauthentification.Services.SequenceGeneratorService;
import com.pfe.msauthentification.repository.EnfantRepository;
import com.pfe.msauthentification.repository.RoleRepository;
import com.pfe.msauthentification.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.openfeign.EnableFeignClients;

@SpringBootApplication
@EnableFeignClients
public class MsAuthentificationApplication implements CommandLineRunner {
	@Autowired
	UserRepository userRepository;

	@Autowired
	RoleRepository roleRepository;
	@Autowired
	EnfantRepository enfantRepository;
	@Autowired
	SequenceGeneratorService sequenceGeneratorService;

	public static void main(String[] args) {
		SpringApplication.run(MsAuthentificationApplication.class, args);
	}
	@Override
	public void run(String... args) throws Exception {
/*	Role role3=new Role();
		role3.setId(sequenceGeneratorService.generateSequence(Role.SEQUENCE_NAME));
		role3.setName(ERole.ROLE_ADMIN);
		roleRepository.save(role3);


Role role1=new Role();
		role1.setId(sequenceGeneratorService.generateSequence(Role.SEQUENCE_NAME));
		role1.setName(ERole.ROLE_CHILD);
		roleRepository.save(role1);
		Role role2=new Role();
		role2.setId(sequenceGeneratorService.generateSequence(Role.SEQUENCE_NAME));
		role2.setName(ERole.ROLE_PARENT);
		roleRepository.save(role2);

*/

	}
}
