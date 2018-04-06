class ChangeRoles < ActiveRecord::Migration[5.1]
  def change
    change_column :roles, :is_admin, :boolean
    change_column :roles, :is_god, :boolean
  end
end
