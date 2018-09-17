from django.shortcuts import render
from django.http import HttpResponseRedirect
from django.core.urlresolvers import reverse
from django.contrib.auth import login, logout, authenticate
from django.contrib.auth.forms import UserCreationForm
# Create your views here.


def logout_view(request):
	"""Logout of system"""
	logout(request)
	return HttpResponseRedirect(reverse('learning_logs:index'))

def register(request):
	"""Register new a User"""
	if request.method != 'POST':
		# Display blank registraion page
		form = UserCreationForm
	else:
		# Process completed Form
		form = UserCreationForm(data=request.POST)

		if form.is_valid():
			new_user = form.save()
			# Log the user in and then redirect to home page.
			authenticated_user = authenticate(	username=new_user.username,
												password=request.POST['password1'])
			login(request, authenticated_user)
			return HttpResponseRedirect(reverse('learning_logs:index'))
	context = {'form': form,}
	return render(request, 'users/register.html', context)