class CreateNotecards < ActiveRecord::Migration[6.0]
  def change
    create_table :notecards do |t|
      t.string :term
      t.string :definition
      t.references :subject, null: false, foreign_key: true

      t.timestamps
    end
  end
end
