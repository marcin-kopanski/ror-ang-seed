class RemoveNicknameFromUsers < ActiveRecord::Migration[5.1]
  def change
    remove_column :users, :name, :string
    remove_column :users, :nickname, :string
  end
end
