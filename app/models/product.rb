class Product < ApplicationRecord
  belongs_to :user, dependent: :destroy
  has_many :reviews, dependent: :delete_all
  validates :title, :image, :category, :price, :description, :user_id, presence: true
end
