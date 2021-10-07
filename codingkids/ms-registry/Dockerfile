FROM adoptopenjdk/openjdk11:alpine-jre
COPY target/ms-registry*.jar ms-registry.jar
ENTRYPOINT ["java","-jar","/ms-registry.jar"]
#ADD target/ms-regisrty-0.0.1-SNAPSHOT.jar app.jar
#ENTRYPOINT ["java","-jar","app.jar"]
EXPOSE 8888