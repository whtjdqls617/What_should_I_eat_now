FROM debian:buster

LABEL Description="42openproject spring boot api" Vendor="hyahn" Version="1.0"
EXPOSE 8080 80
# install
RUN apt-get update && apt-get install -y default-jdk
ENV JAVA_HOME "/usr/lib/jvm/default-java"
ENV PATH "$PATH:$JAVA_HOME/bin"

COPY ./build/libs/SelectFood-*.jar /tmp/
CMD java -jar /tmp/SelectFood-0.0.1-SNAPSHOT.jar
