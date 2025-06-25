---
title: "Markdown 样式指南"
description: "以下是在 Astro 中编写 Markdown 内容时可使用的一些基本 Markdown 语法示例。"
pubDate: 2025 4 26
image: /image/image3.png
categories:
  - tech
tags:
  - Makrdown
badge: Pin
---


以下是在 Astro 中编写 Markdown 内容时可使用的一些基本 Markdown 语法示例。

## 标题

以下 HTML `<h1>` 到 `<h6>` 元素表示六个级别的章节标题。`<h1>` 是最高级别，而 `<h6>` 是最低级别。

# H1

## H2

### H3

#### H4

##### H5

###### H6

## 段落

Xerum，quo qui aut unt expliquam qui dolut labo。Aque venitatiusda cum，voluptionse latur sitiae dolessi aut parist aut dollo enim qui voluptate ma dolestendit peritin replis aut quas inctum laceat est volestemque commosa as cus endigna tectur，offic to cor sequas etum rerum idem sintibus eiur？Quianimin porecus evelectur，cum que nis nust voloribus ratem aut omnimi，sitatur？Quiatem。Nam，omnis sum am facea corem alique molestrunt et eos evelece arcillit ut aut eos eos nus，sin conecerem erum fuga。Ri oditatquam，ad quibus unda veliamenimin cusam et facea ipsamus es exerum sitate dolores editium rerore eost，temped molorro ratiae volorro te reribus dolorer sperchicium faceata tiustia prat。Itatur？Quiatae cullecum rem ent aut odis in re eossequodi nonsequ idebis ne sapicia is sinveli squiatum，core et que aut hariosam ex eat。

## 图片

#### 语法

```markdown
![替代文本](./完整/或/相对/路径/的/图片)
```

#### 输出

![博客占位图](/home.webp)

## 引用

引用元素表示来自其他来源的内容，可选择性附带必须在 `footer` 或 `cite` 元素内的引用来源，也可选择性进行行内更改，如注释和缩写。

### 无来源引用

#### 语法

```markdown
> Tiam, ad mint andaepu dandae nostion secatur sequo quae。
> **注意** 你可以在引用中使用 _Markdown 语法_。
```

#### 输出

> Tiam, ad mint andaepu dandae nostion secatur sequo quae。
> **注意** 你可以在引用中使用 _Markdown 语法_。

### 带来源引用

#### 语法

```markdown
> 不要通过共享内存来沟通，通过沟通来共享内存。<br>
> — <cite>Rob Pike[^1]</cite>
```

#### 输出

> 不要通过共享内存来沟通，通过沟通来共享内存。<br>
> — <cite>Rob Pike[^1]</cite>

[^1]: 上述引用摘自 Rob Pike 在 2015 年 11 月 18 日 Gopherfest 上的 [演讲](https://www.youtube.com/watch?v=PAAkCSZUG1c)。

## 表格

#### 语法

```markdown
| 斜体   | 粗体   | 代码   |
| ------ | ------ | ------ |
| _斜体_ | **粗体** | `代码` |
```

#### 输出

| 斜体   | 粗体   | 代码   |
| ------ | ------ | ------ |
| _斜体_ | **粗体** | `代码` |

## 代码块

#### 语法

我们可以在新行使用三个反引号 ``` 来编写代码片段，并在新行使用三个反引号关闭。要高亮特定语言的语法，请在第一个三个反引号后写上语言名称，例如 html、javascript、css、markdown、typescript、txt、bash。

````markdown
```cpp
#include <bits/stdc++.h>
using namespace std;

const int N = 1e5 + 5;
int n, k, a[N];
long long ans;
vector<int> v[N];

int main() {
  scanf("%d%d", &n, &k);
  for (int i = 1; i <= n; i++) {
    scanf("%d", &a[i]);
    v[i % k].push_back(a[i]);
  }
  for (int i = 0; i < k; i++)
    sort(v[i].rbegin(), v[i].rend());
  for (int i = 0; i < k; i++) {
    for (int j = 0; j + 1 < v[i].size(); j += 2) {
      ans += v[i][j] + v[i][j + 1];
    }
  }
  printf("%lld\n", ans);
  return 0;
}
````

#### 输出

```cpp
#include <bits/stdc++.h>
using namespace std;

const int N = 1e5 + 5;
int n, k, a[N];
long long ans;
vector<int> v[N];

int main() {
  scanf("%d%d", &n, &k);
  for (int i = 1; i <= n; i++) {
    scanf("%d", &a[i]);
    v[i % k].push_back(a[i]);
  }
  for (int i = 0; i < k; i++)
    sort(v[i].rbegin(), v[i].rend());
  for (int i = 0; i < k; i++) {
    for (int j = 0; j + 1 < v[i].size(); j += 2) {
      ans += v[i][j] + v[i][j + 1];
    }
  }
  printf("%lld\n", ans);
  return 0;
}
```

## 列表类型

### 有序列表

#### 语法

```markdown
1. 第一项
2. 第二项
3. 第三项
```

#### 输出

1. 第一项
2. 第二项
3. 第三项

### 无序列表

#### 语法

```markdown
- 列表项
- 另一项
- 再另一项
```

#### 输出

- 列表项
- 另一项
- 再另一项

### 嵌套列表

#### 语法

```markdown
- 水果
  - 苹果
  - 橙子
  - 香蕉
- 乳制品
  - 牛奶
  - 奶酪
```

#### 输出

- 水果
  - 苹果
  - 橙子
  - 香蕉
- 乳制品
  - 牛奶
  - 奶酪

## 其他元素

#### 语法

```markdown
<abbr title="Graphics Interchange Format">GIF</abbr> 是一种位图图像格式。
H<sub>2</sub>O X<sup>n</sup> + Y<sup>n</sup> = Z<sup>n</sup>
按 <kbd>CTRL</kbd>+<kbd>ALT</kbd>+<kbd>Delete</kbd> 键结束会话。
大多数 <mark>蝾螈</mark> 是夜行动物，会捕食昆虫、蠕虫和其他小生物。
```

#### 输出

<abbr title="Graphics Interchange Format">GIF</abbr> 是一种位图图像格式。
H<sub>2</sub>O X<sup>n</sup> + Y<sup>n</sup> = Z<sup>n</sup>
按 <kbd>CTRL</kbd>+<kbd>ALT</kbd>+<kbd>Delete</kbd> 键结束会话。
大多数 <mark>蝾螈</mark> 是夜行动物，会捕食昆虫、蠕虫和其他小生物。

