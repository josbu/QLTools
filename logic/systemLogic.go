// -*- coding: utf-8 -*-
// @Time    : 2022/4/23 15:33
// @Author  : Nuanxinqing
// @Email   : nuanxinqing@gmail.com
// @File    : systemLogic.go

package logic

import (
	_const "QLPanelTools/const"
	"QLPanelTools/model"
	"QLPanelTools/tools/requests"
	res "QLPanelTools/tools/response"
	"encoding/json"
	"go.uber.org/zap"
	"os/exec"
	"runtime"
	"strconv"
	"syscall"
)

// CheckVersion 检查版本更新
func CheckVersion() (model.WebVer, res.ResCode) {
	// 版本号
	var v model.Ver
	var w model.WebVer
	// 获取仓库版本信息
	url := "https://version.6b7.xyz/qltools_version.json"
	r, err := requests.Requests("GET", url, "", "")
	if err != nil {
		return w, res.CodeServerBusy
	}
	// 序列化内容
	err = json.Unmarshal(r, &v)
	if err != nil {
		zap.L().Error(err.Error())
		return w, res.CodeServerBusy
	}
	if v.Version != _const.Version {
		w.Update = true
	} else {
		w.Update = false
	}
	w.Notice = v.Notice
	w.Version = _const.Version

	return w, res.CodeSuccess
}

// UpdateSoftware 更新软件
func UpdateSoftware() (res.ResCode, string) {
	if runtime.GOOS == "windows" {
		return res.CodeUpdateServerBusy, "Windows系统不支持此命令"
	}
	//// 获取版本号
	//w, _ := CheckVersion()
	//if w.Version == _const.Version {
	//	return res.CodeUpdateServerBusy, "已经是最新版本"
	//}
	// 更新程序
	go func(version, GOOS string) {
		//// 获取代理下载地址
		//gh, _ := sqlite.GetSetting("ghProxy")
		//var url string
		//var rarName string
		//var SWName string
		//url = gh.Value + "https://github.com/nuanxinqing123/QLTools/releases/download/" + version
		//if GOOS == "amd64" {
		//	SWName = "QLTools-linux-amd64"
		//	rarName = "QLTools-linux-amd64.rar"
		//	url += "/QLTools-linux-amd64.rar"
		//} else if GOOS == "arm64" {
		//	SWName = "QLTools-linux-arm64"
		//	rarName = "QLTools-linux-arm64.rar"
		//	url += "/QLTools-linux-arm64.rar"
		//} else {
		//	SWName = "QLTools-linux-arm-7"
		//	rarName = "QLTools-linux-arm-7.rar"
		//	url += "/QLTools-linux-arm-7.rar"
		//}
		//zap.L().Debug(url)
		//
		//// 下载程序
		//req := httplib.Get(url)
		//req.SetTimeout(time.Minute*5, time.Minute*5)
		//data, err := req.Bytes()
		//if err != nil {
		//	zap.L().Error(err.Error())
		//}
		//
		//// 获取运行的绝对路径
		//ExecPath, err := filepath.Abs(filepath.Dir(os.Args[0]))
		//if err != nil {
		//	zap.L().Error(err.Error())
		//}
		//// 删除旧程序
		//filename := ExecPath + "/" + SWName
		//if err = os.Remove(filename); err != nil {
		//	zap.L().Error("删除旧程序失败：" + err.Error())
		//}
		//// 写入压缩包
		//if f, err := os.OpenFile(rarName, syscall.O_CREAT, 0777); err != nil {
		//	zap.L().Error("创建程序错误：" + err.Error())
		//} else {
		//	_, err := f.Write(data)
		//	f.Close()
		//	if err != nil {
		//		des := err.Error()
		//		if err = os.WriteFile(rarName, data, 777); err != nil {
		//			zap.L().Error("写入程序错误：" + des + err.Error())
		//		}
		//	}
		//}
		//// 解压
		//a, err := unarr.NewArchive(rarName)
		//if err != nil {
		//	panic(err)
		//}
		//defer a.Close()
		//_, err = a.Extract(ExecPath)
		//if err != nil {
		//	zap.L().Error(err.Error())
		//}
		//
		//// 删除压缩包
		//if err = os.Remove(ExecPath + "/" + rarName); err != nil {
		//	zap.L().Error("删除压缩包失败：" + err.Error())
		//}

		//// 新程序赋予755权限
		//exec.Command("chmod", "755", SWName)
		//zap.L().Info("程序更新完成，即将自动重启")

		// 获取当前进程PID
		pid := syscall.Getegid()
		exec.Command("kill", "-SIGUSR1", strconv.Itoa(pid))

	}(_const.Version, "amd64")

	return res.CodeSuccess, "程序已进入自动更新任务，如果更新失败请手动更新"
}
