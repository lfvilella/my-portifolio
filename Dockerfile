FROM ruby:2.7

ADD ./Gemfile* /app/

WORKDIR /app

RUN bundle install

CMD jekyll serve
