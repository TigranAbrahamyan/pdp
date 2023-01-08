#include <iostream>

using namespace std;

class Node {
  public:
    int _data;
    Node* _left;
    Node* _right;

    Node(int data, Node* left = NULL, Node* right = NULL) {
      this->_data = data;
      this->_left = left;
      this->_right = right;
    }
};

class BSTree {
  private:
    Node* _root;

    Node* removeNodeRecursively(Node* node, int data) {
      if (data > node->_data) {
        node->_right = removeNodeRecursively(node->_right, data);
      } else if (data < node->_data) {
        node->_left = removeNodeRecursively(node->_left, data);
      } else {
        if (!node->_left) {
          node = node->_right;
        } else if (!node->_right) {
          node = node->_left;
        } else {
          Node *min = node->_right;
          while (min->_left) {
            min = min->_left;
          }

          node->_data = min->_data;
          node->_right = removeNodeRecursively(node->_right, min->_data);
        }
      }

      return node;
    }

    void printRecursively(Node* node) {
      if (!node) {
        return;
      }

      printRecursively(node->_left);
      cout << node->_data << " ";
      printRecursively(node->_right);
    }

  public:
    BSTree(Node* root = NULL) {
      this->_root = root;
    }

    void insert(int data) {
      Node* newNode = new Node(data);

      if (!this->_root) {
        this->_root = newNode;
        return;
      }

      Node* temp = this->_root;
      Node* prev = NULL;

      while (temp) {
        prev = temp;

        if (data < temp->_data) {
          temp = temp->_left;
        } else {
          temp = temp->_right;
        }
      }

      if (data < prev->_data) {
        prev->_left = newNode;
      } else {
        prev->_right = newNode;
      }
    }

    bool isExist(int data) {
      Node* temp = this->_root;

      while (temp) {
        if (data == temp->_data) {
          return true;
        }

        if (data < temp->_data) {
          temp = temp->_left;
        } else {
          temp = temp->_right;
        }
      }

      return false;
    }

    Node* remove(int data) {
      if (!this->_root) {
        return NULL;
      }

      return this->removeNodeRecursively(this->_root, data);
    }

    void print() {
      this->printRecursively(this->_root);
    }
};

/*
      5
    /   \
  2       8
        /    \
      6        9
                \
                  12
                /    \
              10       15
*/

int main() {
  BSTree* tree = new BSTree();

  tree->insert(5);
  tree->insert(8);
  tree->insert(6);
  tree->insert(9);
  tree->insert(12);
  tree->insert(15);
  tree->insert(2);
  tree->insert(10);

  tree->print();

  tree->remove(12);

  cout << endl;

  tree->print();

  int searchNode = 155;

  cout << endl << "Node " << searchNode << " exist: " << (tree->isExist(searchNode) == 1 ? "true" : "false") << endl;

  return 0;
}
