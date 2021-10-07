

FROM adoptopenjdk/openjdk11:alpine-jre
COPY target/ms-paiement*.jar ms-paiement.jar
ENTRYPOINT ["java","-jar","/ms-paiement.jar"]
#ADD target/ms-regisrty-0.0.1-SNAPSHOT.jar app.jar
#ENTRYPOINT ["java","-jar","app.jar"]
EXPOSE 8883