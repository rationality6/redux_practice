class CreateReacts < ActiveRecord::Migration[5.0]
  def change
    create_table :reacts do |t|
      t.string :name
      t.integer :phone

      t.timestamps
    end
  end
end
