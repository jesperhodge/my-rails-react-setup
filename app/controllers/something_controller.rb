class SomethingController < ApplicationController
  def fetch
    render json: 'You fetched something!'.to_json
  end
end