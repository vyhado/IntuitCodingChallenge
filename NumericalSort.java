class NumericalSort {

	public static void main(String[] args) {
		int[] unsorted = {1,10,5,63,29,71,10,12,44,29,10,-1};
		NumericalSort.sort(unsorted);
		for (int x : unsorted) {
			System.out.print(x);
			System.out.print(", ");
		}
	}

	/* Sorts LIST into numerical order. */
	static int[] sort(int[] list) {
		for (int i = 0; i < list.length; i++) {
			for (int j = i; j > 0; j--) {
				if (list[j] < list[j-1]) {
					int temp = list[j-1];
					list[j-1] = list[j];
					list[j] = temp;
				}
			}
		}
		return list;
	}
}
