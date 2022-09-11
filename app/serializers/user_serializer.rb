class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :avatar, :bio, :password_digest
  has_many :products
  # has_many :reviews, through: :products, dependent: :delete_all
end
