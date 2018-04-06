class CreateRoles < ActiveRecord::Migration[5.1]
  def change
    create_table :roles do |t|
      t.timestamps null: false
      t.string :name
      t.string :is_admin
      t.string :is_god
    end
  end
end
