class ChangeUserForeignKeys < ActiveRecord::Migration[5.1]
  def change
    change_column_null :users, :team_id, true
    change_column_null :users, :role_id, true
  end
end
