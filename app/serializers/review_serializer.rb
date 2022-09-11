class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :rating, :user, :created_at
  has_one :user, dependent: :destroy
  has_one :product, dependent: :destroy
end
