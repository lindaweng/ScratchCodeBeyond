require 'bundler'
Bundler.require
require "sinatra"
require "./models.rb"
class MyApp < Sinatra::Base
    get '/' do
       erb :index
    end
   
    get '/curriculum' do
       erb :curriculum
    end
   
    get '/about' do
       erb :about
    end
end