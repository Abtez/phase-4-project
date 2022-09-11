class Review < ApplicationRecord
  belongs_to :user, dependent: :destroy
  belongs_to :product, dependent: :destroy
  validates :rating, :title, :description, :product_id, :user_id, presence: true
  validates :rating, numericality: { only_integer: true }
  validates :rating, :inclusion => { :in => 1..5 }
  
end
