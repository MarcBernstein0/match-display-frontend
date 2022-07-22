docker_build:
	docker build -t match-display-frontend -f ./container/Dockerfile .

docker_run: 
	docker run --rm -p 3000:80 match-display-frontend

run_container: docker_build docker_run
