class User < ApplicationRecord
  include Clearance::User

  belongs_to :team, optional: true
  belongs_to :role, optional: true
end
