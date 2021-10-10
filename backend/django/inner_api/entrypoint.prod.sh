#! /bin/sh

if [ "$DATABASE" = "postgres" ]
then
	echo "Waiting for postgres..."
	while [ ! nc - z $SQL_HOST $SQL_PORT ]
	do
		sleep 0.1
	done

	echo "PostgreSQL started"
	echo "CREATE DATABASE create database selectfood owner postgres;" | psql -U postgres --skip-password;\
fi

exec "$@"
