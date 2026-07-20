package com.rohit.security;

import java.security.Key;
import java.util.Date;

import javax.crypto.SecretKey;

import io.jsonwebtoken.*;
import io.jsonwebtoken.security.Keys;

public class JwtUtil {

    private static final String SECRET =
            "8f3d91c6e5a74b0ab42f918d3e7c5f1a9b8d6e4c2f7a1b3d5e9f0c8a6b4d2e1";

    private static final SecretKey KEY =
            Keys.hmacShaKeyFor(SECRET.getBytes());

    public static String generateToken(
            String email,
            String role) {

    	return Jwts.builder()
    	        .subject(email)
    	        .claim("role", role)
    	        .issuedAt(new Date())
    	        .expiration(new Date(
                        System.currentTimeMillis()
                        + 86400000))
    	        .signWith(KEY)
    	        .compact();
    }
    
    public static String extractUsername(String token) {
        return Jwts.parser()
                .verifyWith(KEY)
                .build()
                .parseSignedClaims(token)
                .getPayload()
                .getSubject();
    }
    
    public static String extractRole(String token) {

        return Jwts.parser()
                .verifyWith(KEY)
                .build()
                .parseSignedClaims(token)
                .getPayload()
                .get("role", String.class);
    }

    public static boolean validateToken(String token) {
        try {
            Jwts.parser()
                    .verifyWith(KEY)
                    .build()
                    .parseSignedClaims(token);
            return true;
        } catch (Exception e) {
            return false;
        }
    }
}