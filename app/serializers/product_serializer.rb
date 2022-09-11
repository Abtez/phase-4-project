class ProductSerializer < ActiveModel::Serializer
  attributes :id, :title, :image, :category, :price, :description
  has_one :user
  has_many :reviews
end
