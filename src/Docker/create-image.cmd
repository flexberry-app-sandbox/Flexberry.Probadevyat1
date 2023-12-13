docker build --no-cache -f SQL\Dockerfile.PostgreSql -t probadevyat/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t probadevyat/app ../..
