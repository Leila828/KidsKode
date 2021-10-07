

FROM adoptopenjdk/openjdk11:alpine-jre
COPY target/ms-learning*.jar ms-learning.jar
ENTRYPOINT ["java","-jar","/ms-learning.jar"]
#ADD target/ms-regisrty-0.0.1-SNAPSHOT.jar app.jar
#ENTRYPOINT ["java","-jar","app.jar"]
EXPOSE 8882