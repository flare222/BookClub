from rest_framework import serializers
from django.contrib.auth import get_user_model
from .models import Book, Comment

User = get_user_model()


from clubs.serializers import PopulatedClubSerializer

class BookSerializer(serializers.ModelSerializer):
  class Meta:
    model = Book
    fields = '__all__'
    extra_kwargs = {'comments': {'required': False}}
    

class UserSerializer(serializers.ModelSerializer):
 
  class Meta:
    model = User
    fields = '__all__'

class CommentSerializer(serializers.ModelSerializer):

  class Meta:
    model = Comment
    fields = ('text', 'owner', 'id', 'book')

class PopulatedCommentSerializer(CommentSerializer):

  owner = UserSerializer()
  

# class PopulatedClubSerializer(ClubSerializer):

#    class Meta:
#     model = Book
#     fields = '__all__'

# class ClubSerializer(serializers.ModelSerializer):

#   class Meta:
#       model = Club
#       fields = '__all__'

class PopulatedBookSerializer(BookSerializer):

  owner = UserSerializer()
  comments = PopulatedCommentSerializer(many=True)
  # clubs = ClubSerializer()
