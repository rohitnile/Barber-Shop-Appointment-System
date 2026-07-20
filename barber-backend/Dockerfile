FROM eclipse-temurin:21-jdk

WORKDIR /app

COPY . .

RUN chmod +x mvnw

RUN ./mvnw clean package -DskipTests

EXPOSE 1212

CMD ["java","-jar","target/BarberShop-Appointment-System-0.0.1-SNAPSHOT.jar"]