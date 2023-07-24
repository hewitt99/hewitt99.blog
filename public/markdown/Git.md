# Git

### 产生一条fixup的commit记录，通过rebase可以快捷变基合一

```
git commit --fixup 'commitId'
git rebase -i --autosquash 'commitId'^
```

### github令牌

`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`

### git仅保留目标分支

`git branch | grep -v -E 'feature/v1.1.0|master' | xargs git branch -D`

-v表示反选，-E表示正则表达式匹配

