package com.pfe.msauthentification.repository;

public interface ISecurityUserService {
    String validatePasswordResetToken(String token);

}
