class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :avatar, :bio, :password_digest
  has_many :products, dependent: :destroy
  # has_many :reviews, through: :products, dependent: :delete_all
end
