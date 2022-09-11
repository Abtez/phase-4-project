class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :rating, :user, :created_at
  has_one :user
  has_one :product
end
