---
title: 整理git常用操作
date: 2020-07-26
categories:
  - git
tags:
  - git
sidebar: 'auto'
---

---

::: tip 提示
常规的 git 操作
:::

- 配置用户以及邮箱

  > - `git config --global user.name "xxx"`
  > - `git config --global user.email "xxx@qq.com"`

- 查看配置

  > - `git config --global user.name`
  > - `git config --global user.email`

- 初始化仓库

  > - `git init` 初始化 git
  > - `git clone <url>` 克隆某个路径下代码
  > - `git status` 查看代码提交状态
  > - `git add .` 提交所有代码到暂存区
  > - `git commit -m "xxx"` 添加到版本库
  > - `git log` 查看提交记录
  > - `git log --oneline` 一行显示提交记录
  > - `git log --all --grep = "homePage"` 查询提交记录中包含"homePage"的记录
  > - `git log --author = "lihh"` 获取某个提交者的日志
  > - `git diff` 默认比较工作区以及暂存区代码
  > - `git reset HEAD <文件名>` 根据文件名从缓存区进行撤销
  > - `git checkout <文件名>` 从缓存区获取版本文件
  > - `git rm --cached <文件名>` 将缓存区的文件删除
  > - `git reset --hard <版本号>` 从版本库恢复某个版本
  > - `git reflog` 查看历史版本
  > - `git remote add origin <url>` 添加某个 git 地址
  > - `git push -u origin master` 提交到代码到主分支
  > - `git rm --cached [file]` 停止追踪指定文件, 但是文件保留在暂存区
  > - `git mv [name_before] [name_after]` 改名文件 并且将这个改名放入暂存区
  > - `git push origin --delete [branch-name]` 删除远程的分支
  > - `git commit -v "xxx"` 提交时显示所有文件的 diff 信息
  > - `git checkout [commit] [file]` 恢复某个 commit 的指定文件到暂存区和工作区
  > - `git checkout .` 恢复暂存区的所有的文件到工作区
  > - `git reset [file]` 重置暂存区的指定文件, 与上次 commit 保持一致，但是工作区保持不变
  > - `git reset --hard` 重置暂存区和工作区，与上次的 commit 保持一致
  > - `git reset [commit]` 重置当前分支的指针为指定的 commit，同时重置暂存区，但是工作区不变
  > - `git log --online --graph` 显示提交过程
  > - `git stash` 进行工作区的代码暂存
  > - `git stash pop` 回退暂存区代码

- 分支管理
  > - `git branch` 查看所有的分支
  > - `git branch <名称>` 创建某个分支
  > - `git checkout <分支名称>` 切换到某个分支
  > - `git checkout -b <分支名称>` 直接创建并切换分支
  > - `git branch -d <分支名称>` 直接删除某个分支
  > - `git merge <分支名称>` 合并指定分支到当前的分支
  > - `git rebase <分支名称>` 进行分支合并, 不会出现分叉合并
  > - `git remote update origin --prune` 将服务上分支更新到本地(--可能出现本地没有分支，但是服务上有)
  > - `git branch -r` 列举出远程中所有的分支
  > - `git mv [name_before] [name_after]` 改名文件 并且将这个改名放入暂存区
