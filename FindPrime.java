class FindPrime {
	
	public static void main(String[] args) {
		int three = findPrime(3);
		int fiftyeight = findPrime(58);
		int tenthousandone = findPrime(10001);
		System.out.println(three + ", " + fiftyeight + ", " + tenthousandone);
	}

	/* Returns whether or not integer N is a prime number. */
	static boolean isPrime(int n) {
		if (n < 2) {
			return false;
		}
		int i = n - 1;
		while (i > 1) {
			if ((n % i) == 0) {
				return false;
			}
			i--;
		}
		return true;
	}

	/* Finds the Nth prime number. */
	static int findPrime(int n) {
		int nth = 1;
		int number = 2;
		while (true) {
			if (nth == n) {
				return number;
			} else {
				number++;
				if (isPrime(number)) {
					nth++;
				}
			}
		}
	}

}
