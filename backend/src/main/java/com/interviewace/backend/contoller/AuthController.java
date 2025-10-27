package com.interviewace.backend.contoller;



import com.interviewace.backend.dto.LoginDetail;
import com.interviewace.backend.dto.SignupDetail;
import com.interviewace.backend.model.User;
import com.interviewace.backend.repository.UserRepository;
import org.springframework.http.*;
import org.springframework.security.oauth2.jwt.*;
import org.springframework.web.bind.annotation.*;

import java.time.Instant;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class AuthController {

    private final JwtEncoder jwtEncoder;
    private final UserRepository userRepository;

    public AuthController(JwtEncoder jwtEncoder, UserRepository userRepository) {
        this.jwtEncoder = jwtEncoder;
        this.userRepository = userRepository;
    }

    @PostMapping("/signup")
    public ResponseEntity<String> signup(@RequestBody SignupDetail detail) {
        if (userRepository.findByEmail(detail.getEmail()).isPresent()) {
            return ResponseEntity.status(HttpStatus.CONFLICT).body("Email already exists");
        }

        User newUser = new User(detail.getUsername(), detail.getPassword(), detail.getEmail());
        userRepository.save(newUser);

        return ResponseEntity.ok("Signup successful");
    }

    @PostMapping("/login")
    public ResponseEntity<JwtResponse> login(@RequestBody LoginDetail detail) {
        Optional<User> user = userRepository.findByUsername(detail.getUsername());

        if (user.isPresent() && user.get().getPassword().equals(detail.getPassword())) {
            String token = createToken(detail);
            return ResponseEntity.ok(new JwtResponse(token));
        }

        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
    }

    public String createToken(LoginDetail detail) {
        JwtClaimsSet claims = JwtClaimsSet.builder()
                .issuer("InterviewAce")
                .subject(detail.getUsername())
                .issuedAt(Instant.now())
                .expiresAt(Instant.now().plusSeconds(1800)) // 30 mins
                .build();

        return jwtEncoder.encode(JwtEncoderParameters.from(claims)).getTokenValue();
    }
}

record JwtResponse(String token) {}

