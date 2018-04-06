class User < ApplicationRecord
  include Clearance::User

  belongs_to :team
  belongs_to :role
end
