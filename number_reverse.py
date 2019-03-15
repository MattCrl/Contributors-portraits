def reverse(n):
	m=0
	while n>0:
		m=m*10+(n%10)
		n=n/10
	return m

print reverse(123456789)
