package com.pfe.mspaiement.Model;

import lombok.Data;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;
@Data

public class USER {
    private String username;
    private String email;
}
