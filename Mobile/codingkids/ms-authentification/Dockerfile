

FROM java:8
#COPY target/ms-authentification*.jar ms-authentification.jar
ADD target/ms-authentification.jar ms-authentification.jar
ENTRYPOINT ["java","-jar","/ms-authentification.jar"]
#ADD target/ms-regisrty-0.0.1-SNAPSHOT.jar app.jar
#ENTRYPOINT ["java","-jar","app.jar"]
EXPOSE 8881