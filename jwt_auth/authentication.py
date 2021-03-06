#COPY AND PASTE JOB IF YOU WANT IT

from rest_framework.authentication import BasicAuthentication
from rest_framework.exceptions import PermissionDenied
from django.contrib.auth import get_user_model
from django.conf import settings
import jwt

User = get_user_model()

class JWTAuthentication(BasicAuthentication):

  def authenticate(self, request):

    header = request.headers.get('Authorization')

    if not header:
      return None
    if header.startswith('Basic'):
      return None
    if not header.startswith('Bearer'):
      raise PermissionDenied({'message': 'Invalid Authorization Header'})
    # raise === throw an error

    token = header.replace('Bearer ', '')

    try:
      payload = jwt.decode(token, settings.SECRET_KEY, algorithms=['HS256'])
      user = User.objects.get(pk=payload.get('sub'))
    except jwt.exceptions.InvalidTokenError:
      raise PermissionDenied({'message':'Invalid Token Error'})
    except User.DoesNotExist:
      raise PermissionDenied({'message':'No User Found'})

    return (user, token)