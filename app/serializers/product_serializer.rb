class ProductSerializer < ActiveModel::Serializer
  attributes :id, :title, :image, :category, :price, :description
  has_one :user, dependent: :destroy
  has_many :reviews, dependent: :delete_all
end
