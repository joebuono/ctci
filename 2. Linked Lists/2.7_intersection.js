/*

2.7 Intersection: Given two (singly) linked lists, determine if the two lists intersect. Return the intersecting node. Note that the intersection is defined based on reference, not value. That is, if the kth node of the first linked list is the exact same node (by reference) as the jth node of the second linked list, then they are intersecting. 

Solutions:
1. Determine if the last node of each list is the same. If not, return false
   Move the longer list's head pointer forward by the difference in lengths between the two lists. 
   Traverse each pointer, return the intersection point. 


2. I believe there is a LeetCode solution to this problem that involves starting a pointer at each head, traversing them to the end of each list, then setting each equal to the head of the other linked list. Try it out visually. 

*/