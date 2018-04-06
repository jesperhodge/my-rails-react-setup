class AddApprovedAtToUsers < ActiveRecord::Migration[5.1]
  def change
    add_column :users, :approved_at, :datetime

    add_reference :users, :team, foreign_key: true, null: true
    add_reference :users, :role, foreign_key: true, null: true
  end
end
