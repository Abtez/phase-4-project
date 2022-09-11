class Product < ApplicationRecord
  belongs_to :user
  has_many :reviews, dependent: :destroy
  validates :title, :image, :category, :price, :description, :user_id, presence: true
end
