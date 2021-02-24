/*

2.8 Loop Detection: Given a linked list which might contain a loop, implement an algorithm that returns the node at the beginning of the loop if one exists. 

Solution:
1. Three parts
- Detect if there's a loop (fast and slow pointers should intersect)
- Move slow pointer to head. Keep fast pointer where the pointers intersected. Each are k steps from the loop start. If they move at the same pace, they must meet at loop start. 

*/